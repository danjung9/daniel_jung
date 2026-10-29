# Developer Portfolio

A personal site built with Next.js App Router, TypeScript, and Tailwind CSS.

The homepage opens with Daniel Jung above an interactive perception field.
Scrolling resolves the field into layered mountain ridges and sparse trees made
entirely of silver particles on black. A centered biography layout pairs a square
monochrome portrait with left-aligned text. The menu's
About link and the introductory About me link jump directly to the biography.
Projects, contact, and the detailed background page retain their existing URLs
and share a header and footer through the `(portfolio)` route group.

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
