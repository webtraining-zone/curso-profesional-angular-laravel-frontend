import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from '../services/carbonLDP/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  ckeditorContent: string;
  @Input() currentLanguage: string;
  @Input() projectId: string;

  constructor(private commentServices: CommentsService) {
  }

  ngOnInit() {
    const prefix = this.currentLanguage.split('-')[0];
    this.commentServices.setLanguage(prefix);
    this.commentServices.getCommentsByProjectID(this.projectId);
  }

}
