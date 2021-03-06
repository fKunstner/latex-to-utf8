var samples = [
    '\\nabla\\f(\\x) = 2\\x',
    '\\v = \\partial\\x/\\partial\\t',
    'lim {x \\rightarrow \\infty} 1/x = 0',
    'cos \\alpha = \\langle\\u,\\v\\rangle/\\Vert\\u\\Vert\\cdot\\Vert\\v\\Vert',
    '\\Delta_t \\leq (1 - \\kappa)^t\\Delta_0',
    'exp(\\pi\\i) = -1',
    '\\Phi = \\int \\mathbf{E} \\cdot d\\mathbf{A}',
    '\\partial^2\\u/\\partial\\x^2 + \\partial^2\\u/\\partial\\y^2 = 0',
    '\\mathcal{N}(\\x; \\mu, \\sigma^2) = exp(-(\\x - \\mu)^2/\\sigma^2)/\\sqrt\\overline2\\overline\\pi\\sigma',
    '\\mathbb{E}[(\\x-\\mu)^2] = \\sigma^2',
    '\\sum_{i=1}^n f(x_i) \\leq f(\\sum_{i=1}^n x_i)',
];
var samplesText = [
    "Shouldn't it be $\\sum_{i=1}^n$ and not $\\sum_{i=0}^{n-1}$ in " + "\n" +
    "$$\\sum_{i=1}^n f(x_i) \\leq f(\\sum_{i=1}^n x_i)$$" + "\n" +
    "to match the def. in Section 2?",
];
