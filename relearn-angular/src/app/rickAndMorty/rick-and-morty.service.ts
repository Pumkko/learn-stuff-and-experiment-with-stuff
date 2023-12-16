import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';



type Response = {
  name: string
  description: string
  subscribers_count: number
  stargazers_count: number
  forks_count: number
}

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  http = inject(HttpClient)

  query = injectQuery(() => ({
    queryKey: ['repoData'],
    queryFn: () =>
      lastValueFrom(
        this.http.get<Response>('https://api.github.com/repos/tanstack/query'),
      ),
  }))

}
