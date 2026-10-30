# Developer Portfolio

A personal site built with Next.js App Router, TypeScript, and Tailwind CSS.

The homepage opens with Daniel Jung above an interactive perception field.
Scrolling resolves the field into layered mountain ridges and sparse trees made
entirely of silver particles on black. A centered biography layout pairs a square
monochrome portrait with left-aligned text. The menu's
About link and the introductory About me link jump directly to the biography.
Projects and contact share a header and footer through the `(portfolio)` route
group. About links lead to the homepage biography; there is no separate About page.

Every page, including the missing-page screen, uses the homepage's pure black
background, silver text, blue accents, and interactive perception field. A single
shared menu provides identical positioning, constellation animation, native popover
behavior, and pause/resume controls across routes. Workbench layouts keep their
generous reading space. Project media keeps its original color with a subtle
saturation reduction; project details retain their video controls and resources.

Projects uses a workbench layout: roomy media-and-text rows, short display titles,
and a restrained constellation rail that connects on hover or keyboard focus.
The robotics demo is playable inline without autoplay. On phones, the rows stack
and the rail becomes a small constellation beside each project's links. Page
headings use a quieter medium weight and consistent, simple titles.

Individual projects continue the workbench layout with media beside compact facts,
tools, and resource links. A constellation chapter rail leads through the project
notes, becoming a wrapping list of anchors on phones. Reading sections use short
headings and a comfortable text measure, followed by a link to the next project.

Contact uses the same quiet workbench spacing, with a direct email link and a
small constellation connecting the resume and profile links on hover or focus.

The homepage's perception field uses a dependency-free canvas on jet black.
The upper-right menu uses a small orbiting constellation, connects on hover or
keyboard focus, and unfolds into a branching list. Its idle motion pauses with
the field and respects reduced-motion preferences.
Move the pointer (or drag a finger) to attract points and reveal local connections;
hold still to assemble a wireframe parallel-jaw gripper. Animation can be paused
from the menu, stops in hidden tabs and once the biography scene settles, and
becomes static with reduced motion enabled. Touch scrolling and pinch zoom remain
available. The biography is ordinary document content, accessible without animation.

The landscape uses procedural canvas geometry with no background image or image
sampling. The portrait uses the existing `public/me.jpg`, shown with a square CSS
crop and grayscale treatment; it is not a downloaded LinkedIn photo. The source
image is preserved, so it can be replaced with a preferred portrait later.

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
