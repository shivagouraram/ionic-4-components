import { FivGallery } from '../gallery.component';
import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  Host,
  Optional
} from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import {
  trigger,
  transition,
  style,
  animate,
  state,
  AnimationEvent,
  keyframes
} from '@angular/animations';
import { FivOverlay } from '../../overlay/overlay.component';
import { ImageService } from '../image.service';

@Component({
  selector: 'fiv-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss'],
  animations: [
    trigger('image', [
      transition(
        '* => in',
        [
          style({
            position: 'absolute',
            top: '{{top}}px',
            left: '{{left}}px',
            transform: 'translate(0%,0%)',
            height: '{{height}}px',
            width: '{{width}}px',
            opacity: 1,
            borderRadius: '*'
          }),
          animate(
            '{{timing}}',
            style({
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              height: '*',
              width: '*',
              opacity: 1,
              borderRadius: '0'
            })
          )
        ],
        {
          params: {
            top: '0',
            left: '0',
            height: '*',
            width: '*',
            timing: '300ms'
          }
        }
      ),
      transition(
        '* => out',
        [
          style({
            position: 'absolute',
            top: '{{translate}}px',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            height: '*',
            width: '*',
            opacity: 1,
            borderRadius: '0'
          }),
          animate(
            '{{timing}}',
            style({
              position: 'absolute',
              top: '{{top}}px',
              left: '{{left}}px',
              transform: 'translate(0%,0%)',
              height: '{{height}}px',
              width: '{{width}}px',
              opacity: 1,
              borderRadius: '*'
            })
          )
        ],
        {
          params: {
            top: '0',
            left: '0',
            height: '*',
            width: '*',
            translate: '0',
            timing: '340ms'
          }
        }
      ),
      state('hidden', style({ opacity: 0 }))
    ]),
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(
          '180ms',
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 0.3, offset: 0.75 }),
            style({ opacity: 0.97, offset: 1 })
          ])
        )
      ]),
      transition(':leave', [
        style({ opacity: 0.97 }),
        animate(
          '180ms',
          keyframes([
            style({ opacity: 0.97, offset: 0 }),
            style({ opacity: 0.6, offset: 0.8 }),
            style({ opacity: 0, offset: 1 })
          ])
        )
      ])
    ])
  ]
})
export class FivGalleryImage implements OnInit {
  @Input() src: string | SafeResourceUrl;
  index: number;

  @ViewChild('thumbnail') image: ElementRef;
  @ViewChild('overlay') overlay: FivOverlay;

  viewerState = 'in';
  animationParams: AnimationParams;

  backdropColor = 'rgb(0,0,0)';
  openTiming = '300ms';
  closeTiming = '340ms';

  constructor(
    @Optional() @Host() private gallery: FivGallery,
    private imageService: ImageService
  ) {}

  ngOnInit() {}

  open() {
    const p = this.getThumbnailPosition(this.image);
    this.animationParams = {
      translate: p.translate,
      timing: this.openTiming,
      height: p.height,
      width: p.width,
      top: p.top,
      left: p.left
    };

    this.overlay.show(49999);
    this.backdropColor = this.gallery.ambient
      ? this.imageService.getAverageRGB(this.image.nativeElement)
      : '#000';
  }

  close(position: Position) {
    const p = this.getThumbnailPosition(this.image);
    this.animationParams = {
      translate: position.translate,
      timing: this.closeTiming,
      height: p.height,
      width: p.width,
      top: p.top,
      left: p.left
    };
    this.viewerState = 'out';
  }

  handleViewerAnimation(event: AnimationEvent) {
    if (event.fromState === 'void' && event.toState === 'in') {
      this.gallery.open(this.index, this);
    }
    if (
      (event.fromState === 'in' || event.fromState === 'hidden') &&
      event.toState === 'out'
    ) {
      this.overlay.hide();
      this.viewerState = 'in';
    }
  }

  private getThumbnailPosition(
    element: ElementRef,
    progress?: number
  ): Position {
    const bounds = element.nativeElement.getBoundingClientRect();
    return {
      top: bounds.top,
      left: bounds.left,
      height: element.nativeElement.clientHeight,
      width: element.nativeElement.clientWidth
    };
  }
}

export class Position {
  top: number;
  left: number;
  height: number;
  width: number;
  translate?: number;
}

export interface AnimationParams extends Position {
  timing: string;
}
