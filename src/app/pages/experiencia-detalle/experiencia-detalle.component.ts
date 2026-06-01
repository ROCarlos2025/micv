import {
  animate,
  style,
  transition,
  trigger,
  query,
  stagger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EXPERIENCIAS } from 'src/app/data/experiencias.data';
import { Experiencias } from 'src/app/interfaces/experiencia.interface';

@Component({
  selector: 'app-experiencia-detalle',
  templateUrl: './experiencia-detalle.component.html',
  styleUrls: ['./experiencia-detalle.component.scss'],
  standalone: false,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(
          '600ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
    ]),
    trigger('staggerList', [
      transition(':enter', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateX(-20px)' }),
            stagger('100ms', [
              animate(
                '400ms cubic-bezier(0.4, 0, 0.2, 1)',
                style({ opacity: 1, transform: 'translateX(0)' }),
              ),
            ]),
          ],
          { optional: true },
        ),
      ]),
    ]),
  ],
})
export class ExperienciaDetalleComponent implements OnInit {
  experienciaId: string | null = null;
  experiencia: any;
  experiencias: Experiencias = EXPERIENCIAS;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.experienciaId = this.route.snapshot.paramMap.get('id');
    if (this.experienciaId && this.experiencias[this.experienciaId]) {
      this.experiencia = this.experiencias[this.experienciaId];
    } else {
      this.router.navigate(['/home']);
    }
  }

  goBack() {
    this.router.navigate(['/home'], { fragment: 'experience' });
  }
}
