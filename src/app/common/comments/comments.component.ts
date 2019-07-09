import {Component, Input, OnInit} from '@angular/core';
import {Comment, CommentsService} from '../services/carbonLDP/comments.service';
import {User, UsersService} from '../services/carbonLDP/users.service';
import {Document} from 'carbonldp/Document';
import {Project, ProjectsService} from '../services/carbonLDP/projects.service';
import {SessionStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  ckeditorContent: string;
  user: User;
  project: Project;
  @Input() currentLanguage: string;
  @Input() projectId: string;

  comments: Array<Comment> = [];

  constructor(private commentServices: CommentsService, private usersService: UsersService,
              private projectService: ProjectsService, public sessionStorage: SessionStorageService) {
    const session = this.sessionStorage.retrieve('user');
    if (session && session.user) {
      this.usersService.getCarbonUser(session.user.id).then(() => {
        this.user = this.usersService.getUser();
      });
    }

  }

  ngOnInit() {
    const prefix = this.currentLanguage.split('-')[0];
    this.commentServices.setLanguage(prefix);
    this.projectService.getCarbonProject(this.projectId).then((projectDoc: Document & Project) => {
      this.project = projectDoc;
      this.commentServices.getCommentsByProjectID(projectDoc.$id).then((data) => {
        this.comments = data;
      });
    });

  }

  saveComment() {
    this.commentServices.createComment(this.project, this.ckeditorContent, this.user).then((comment: Comment) => {
      this.comments = [...this.comments, comment];
    });
  }

}
