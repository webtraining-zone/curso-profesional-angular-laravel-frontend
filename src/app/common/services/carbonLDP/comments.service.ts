import {Injectable} from '@angular/core';
import {CarbonLDP} from 'carbonldp';
import {Document} from 'carbonldp/Document';
import {COMMENTS_CONTAINER} from '../../../config/carbonLDP/schemas';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private currentLanguage: string;

  constructor(
    private carbonLDP: CarbonLDP
  ) {
  }

  public setLanguage(language): void {
    this.currentLanguage = language + '/';
  }


  public getCommentsByProjectID(Id): Promise<Array<Document & Comment>> {
    return this.carbonLDP.documents.$getMembers(this.currentLanguage + COMMENTS_CONTAINER, _ => _
      .withType('wt:Comment')
      .properties(_.all)
      .filter(`${_.property('project')} = ${_.object(Id)}`)
      .properties({
        author: {
          query: _ => _
            .properties(_.all)
        }
      })
    ).then((comments: Array<Document & Comment>) => {
      return comments;
    });

  }


  public createComment(project, content, user): Promise<Comment> {
    const comment = {project, content, author: user, types: ['wt:Comment']};
    return this.carbonLDP.documents
      .$createAndRetrieve(this.currentLanguage + COMMENTS_CONTAINER, comment)
      .then((commentDocument: Comment) => {
        return this.carbonLDP.documents.$get(comment.author.$id).then(() => {
          return commentDocument;
        });
      });
  }
}


export class Comment {
  author: any;
  project: any;
  content: string;
}
