import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {InventoryService} from "../../service/inventory.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-createreview',
  templateUrl: './createreview.component.html',
  styleUrls: ['./createreview.component.css']
})
export class CreatereviewComponent {
  reviewForm: FormGroup;
  id: number=0;

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private service:InventoryService,private router: Router, private snackBar: MatSnackBar) {
    this.reviewForm = this.formBuilder.group({
      comment: ['', Validators.required],
      rating: ['', Validators.required]
    });
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }
  submitReview() {
    this.service.createReview(this.reviewForm.value.comment, this.reviewForm.value.rating, this.id).subscribe({
      next: data => {
        this.snackBar.open('We appreciate your opinion!', 'Cerrar', {
          duration: 6000 // Duración de la notificación en milisegundos (opcional)
        });
        this.router.navigate(['/products']);
        console.log('invocacion exitosa');
        console.log(data);
      }
    });

  }

}
