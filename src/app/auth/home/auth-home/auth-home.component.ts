import {Component, OnInit} from '@angular/core';

import {ProjectsService} from '../../../public/projects/services/projects.service';
import {Project} from '../../../public/projects/models/project.model';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.scss'],
})
export class AuthHomeComponent implements OnInit {

  projects: Array<Project>;

  constructor(public projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.projectsService.getProjectsByUsingToken().subscribe(
      projects => this.projects = projects,
      error => console.error(error),
    );
  }

}
