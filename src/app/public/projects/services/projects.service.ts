import {Injectable} from '@angular/core';
import {Project} from '../models/project.model';
import {SessionStorageService} from 'ngx-webstorage';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API} from '../../../config/api';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  constructor(
    public http: HttpClient, public sessionStorage: SessionStorageService) {
  }

  getToken() {
    const user = this.sessionStorage.retrieve('user');
    if (!!user && !!user.token) {
      return user.token;
    }
    return false;
  }

  getProjects(): Observable<Array<Project>> {
    const serviceURL = `${API.DATA_SERVICES_BASE_URL}/projects`;
    return this.http.get<Array<Project>>(serviceURL);
  }

  getProject(id: number): Observable<Project> {
    const serviceURL = `${API.DATA_SERVICES_BASE_URL}/projects/${id}`;
    return this.http.get<Project>(serviceURL);
  }

  getProjectsByUsingToken(): Observable<Array<Project>> {
    const serviceURL = `${API.DATA_SERVICES_BASE_URL}/projects/user`;
    // const token = this.getToken();
    //
    // if (token) {
    //   const headers = this.createHeadersObject(token);
    return this.http.get<Array<Project>>(serviceURL);
    // }

    // return null;
  }
}
