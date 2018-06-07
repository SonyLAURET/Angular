import { Trailers } from './Trailers'
export class Films {
    constructor(public title: string, public releasedate: Date, public studio: string, public poster: string, public location: string,
         public rating: string, public genre: string[], public directors: string, public actors: string[], public trailer: Trailers) { };
}

