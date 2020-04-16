import { Component, OnInit } from '@angular/core';
import {Course} from './course';
import { courseService } from './course.service';

@Component({
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {
    
    filteredCourses: Course[] = [];
    
    _courses: Course[] = [];

    _filterBy: string;

    constructor(private courseService: courseService) {}

    ngOnInit(): void{
        this.retornarTodos();
    }

    retornarTodos(): void { 
        this.courseService.retornarTodos().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        })
    }

    deletePorId(idCurso: number): void{
        this.courseService.deletePorId(idCurso).subscribe({
            next: () => {
                console.log('Deletado com sucesso');
                this.retornarTodos();
            },
            error: err => console.log('Erro', err)
        })
    }

    set filter(value: string){
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }


}