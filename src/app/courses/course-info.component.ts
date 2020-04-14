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

    ngOnInit():void{
        this.course = this.courseService.retornaPorId(+this.activatedRoute.snapshot.paramMap.get('id'));
    }

    save():void{
        this.courseService.save(this.course);
    }

    voltar():void{
        
    }

}