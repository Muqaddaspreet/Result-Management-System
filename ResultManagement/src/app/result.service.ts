import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  url="http://localhost:3000/student";
  teacherurl="http://localhost:3000/teacher"

  constructor(private http:HttpClient) { }
  getStudentList()
    {
      return this.http.get(this.url);
    }
    getTeacherList()
    {
      return this.http.get(this.teacherurl);
    }
  
    setStudent(data: any)
    {
      //console.warn("service", data);
      return this.http.post(this.url,data);
    }

  DeleteStudent(id: any)
  {
    return this.http.delete(`${this.url}/${id}`)
  }

  getCurrStudent(id: any)
  {
    return this.http.get(`${this.url}/${id}`)
  }

  UpdateStudent(id: any,data: any)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }

}
