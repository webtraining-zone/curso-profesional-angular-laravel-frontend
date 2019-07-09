import {Injectable} from '@angular/core';
import {CarbonLDP} from 'carbonldp';
import {PROJECTS_CONTAINER} from '../../../config/carbonLDP/schemas';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private carbonLDP: CarbonLDP) {
  }

  getCarbonProject(projectId) {
    return this.carbonLDP.documents.$get(PROJECTS_CONTAINER + projectId + '/');
  }

}


export class Project {
  id: string;
}
