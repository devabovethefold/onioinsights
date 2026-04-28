# React to Astro Migration Skill

This guide outlines the standard workflow and constraints for migrating React component hierarchies into optimized, flat Astro pages using our custom utility framework.

## 1. File & Component Strategy

*   **Singular Astro Pages**: Do **not** split layouts into sub-components. Consolidate sections directly inside the corresponding route in `src/pages/`.
*   **Sequential Imports**: Parse sections sequentially in the exact order found in the source React trees.

## 2. Grid & Structural Layouts (`format.css` & `sections.css`)

*   **Automatic Formatting**: Do **not** manually add `.format` or `.py-copy` classes to `<section>` tags. These are automatically applied via `src/styles/landmarks/sections.css`.
*   **Split Layouts**: 
    *   Apply `.split-[N]` (or responsive variants like `md:split-[N]`) directly to the `<section>` tag.
    *   **Skip `.split-1`**: It does not make any layout changes and can be omitted.
    *   Use `.item` on direct children of the split section to align them with the grid columns.
    *   Example:
        ```astro
        <section class="split-2">
          <div class="item">Left Column</div>
          <div class="item">Right Column</div>
        </section>
        ```

## 3. Element Tag Rules

*   **Subheadings**: Wrap section introductions in `<hgroup>` (if strictly headings/paragraphs) or `<header>`.

## 4. Dependencies

*   **Icons**: Convert to `<Icon name="..." />` implementations.
