[LaTeX to UTF-8](https://fkunstner.github.io/latex-to-utf8/)
is a [bodge](https://www.youtube.com/watch?v=lIFE7h3m40U) 
to write simple [UTF-8](https://en.wikipedia.org/wiki/UTF-8) math using LaTeX.
Use the [snippet tab](https://fkunstner.github.io/latex-to-utf8/#snippet)
for small math expressions 
and the [text tab](https://fkunstner.github.io/latex-to-utf8/#text)
for text containing math in `$...$` or `$$...$$`.

| Mangled Latex | UTF-8 approximation |
| --- | --- |
|`\nabla\f(\x) = 2\x`| `∇𝑓(𝑥) = 2𝑥`|
|`\v = \partial\x/\partial\t`|`𝑣 = 𝜕𝑥/𝜕𝑡`|
|`\mathbb{E}[(\x-\mu)^2] = \sigma^2`|`𝔼[(𝑥−𝜇)²] = 𝜎²`|
|`lim {x \rightarrow \infty} 1/x = 0`|`lim {x → ∞} 1/x = 0`|
|`\Delta_t \leq (1 - \kappa)^t\Delta_0` | `𝛥ₜ ≤ (1 − 𝜅)ᵗ𝛥₀`|
|`\Phi = \int \mathbf{E} \cdot d\mathbf{A}`|`𝛷 = ∫ 𝐄 ⋅ d𝐀`|
|`\partial^2\u/\partial\x^2 + \partial^2\u/\partial\y^2 = 0`|`𝜕²𝑢/𝜕𝑥² + 𝜕²𝑢/𝜕𝑦² = 0`|
|`\mathcal{N}(\x; \mu, \sigma^2) = exp(-(\x - \mu)^2/\sigma^2)/\sqrt\overline2\overline\pi\sigma`|`𝒩(𝑥; 𝜇, 𝜎²) = exp(−(𝑥 − 𝜇)²/𝜎²)/√̅2̅𝜋𝜎`|


This is a quick and dirty replacement of [known commands](https://fkunstner.github.io/latex-to-utf8/map.js)
to matching UTF-8 symbols.
Commands that "do something" rather than produce a symbol, like `\frac{}{}` or `\begin{matrix}...\end{matrix}`, do not work.

Props to [Günter Milde](http://milde.users.sourceforge.net) for the [Unicode ⟷ LaTeX mapping](http://milde.users.sourceforge.net/LUCR/Math/).
