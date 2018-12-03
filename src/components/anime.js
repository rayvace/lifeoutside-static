import {
  easePolyInOut,
  easePolyOut,
  easeElasticOut,
  easeLinear
} from 'd3-ease';

export const getHeroConfig = {
  'offset':{duration: 2000, easing: (t) => easePolyInOut(t, 4.0)},
  'width':{duration: 2000, easing: (t) => easePolyOut(t)},
  'strokeOpacity':{duration: 1000, delay: 1000, easing: (t) => easePolyOut(t)},
  'fillOpacity':{duration: 500, delay: 1300, easing: (t) => easePolyOut(t)},
}

export const getMockupConfig = {
  'transform': {duration: 400, easing: (t) => easePolyOut(t)},
  'opacity':{duration: 200, easing: (t) => easeLinear(t)}
}

export const getCircleConfig = {
  'transform': {duration: 1500, easing: (t) => easeElasticOut(t)},
  'opacity': {duration: 200, easing: (t) => easeLinear(t)}
}
