import {Component, OnInit} from '@angular/core';
import {Project} from './models/project.model';
import {ProjectsService} from './services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  projects: Array<Project>;

  constructor(
    public projectsService: ProjectsService,
    // public _authService: AuthenticationService,
    // public _toggleModalLoginService: ToggleModalService
  ) {}

  ngOnInit() {
    this.projectsService.getProjects().subscribe(
      vehicles => this.projects = vehicles,
      error => console.error(error),
    );
  }

}
