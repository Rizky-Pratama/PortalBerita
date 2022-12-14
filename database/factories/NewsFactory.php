<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->paragraph(1, true),
            'description' => fake()->paragraph(3, true),
            'category' => fake()->word(1, true),
            'author' => fake()->name(),
            'created_at' => now(),
        ];
    }
}
