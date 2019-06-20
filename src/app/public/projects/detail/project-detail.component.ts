import {Component, OnInit} from '@angular/core';
import {Project} from '../models/project.model';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../services/projects.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private location: Location) {
  }

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    // Get the "id" from the route
    const slug = this.route.snapshot.paramMap.get('slug');
    this.projectsService.getProject(slug).
      subscribe(
        project => this.project = project,
        error => console.error(error),
      );
    // this.vehicle = this._vehiclesService.getProject(id);
  }

  goBack() {
    this.location.back();
  }

}
