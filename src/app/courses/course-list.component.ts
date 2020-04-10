import { Component, OnInit } from '@angular/core';
import {Course} from './course';
import { from } from 'rxjs';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [
            {
                id: 11,
                name: 'Angular: Forms',
                imageUrl: "",
                price: 99.99,
                code: 'xps-8796',
                duration: "120 min",
                rating: "4,5",
                dataLancamento: '23/04/2020'
            },
            {
                id: 12,
                name: 'Angular: http',
                imageUrl: "",
                price: 45.99,
                code: 'lkl-1002',
                duration: "80 min",
                rating: "4",
                dataLancamento: '08/03/2020'
            }
        ]
    }


}