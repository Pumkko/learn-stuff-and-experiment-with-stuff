import { z } from "zod";

export const RickAndMortyCharacterResponseSchema = z.object({
    results: z.array(
        z.object({
            id: z.number().min(1),
            name: z.string(),
            status: z.enum(["Alive", "Dead", "unknown"]),
            origin: z.object({
                name: z.string(),
                url: z.union([z.string().url(), z.literal("")])
            }),
            url: z.string().url()
        })
    )
});

export type RickAndMortyCharacterResponse = z.infer<typeof RickAndMortyCharacterResponseSchema>

