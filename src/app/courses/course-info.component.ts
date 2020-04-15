import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { courseService } from './course.service';

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{

    course: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: courseService){
        
    }

    ngOnInit(): void { 
        this.courseService.retornaPorId(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: course => this.course = course,
            error: err => console.log('Error', err)
        });
    }

    save():void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log("Save sucess!!", course),
            error: err => console.log("erro", err)
        });
    }

    voltar():void{
        
    }

}