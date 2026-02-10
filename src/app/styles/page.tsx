export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Font Showcase */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-brand-black">
            DM Sans Font Weights
          </h2>
          <div className="space-y-6 rounded-lg border bg-card p-6">
            <div>
              <p className="text-3xl font-normal">DM Sans Regular (400)</p>
              <code className="text-xs text-muted-foreground">font-normal</code>
            </div>
            <div>
              <p className="text-3xl font-medium">DM Sans Medium (500)</p>
              <code className="text-xs text-muted-foreground">font-medium</code>
            </div>
            <div>
              <p className="text-3xl font-semibold">DM Sans Semibold (600)</p>
              <code className="text-xs text-muted-foreground">font-semibold</code>
            </div>
            <div>
              <p className="text-3xl font-bold">DM Sans Bold (700)</p>
              <code className="text-xs text-muted-foreground">font-bold</code>
            </div>
          </div>
        </section>

        {/* Brand Colors */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-brand-black">
            Chequemate Brand Colors
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Primary Green */}
            <div className="rounded-lg border p-4">
              <div className="mb-3 h-20 rounded-md bg-brand-green"></div>
              <p className="font-medium">Brand Green (Primary)</p>
              <p className="text-sm text-muted-foreground">#008a48</p>
              <code className="text-xs text-brand-green">
                bg-brand-green / text-brand-green
              </code>
            </div>

            {/* Green Dark */}
            <div className="rounded-lg border p-4">
              <div className="mb-3 h-20 rounded-md bg-brand-green-dark"></div>
              <p className="font-medium">Brand Green Dark</p>
              <p className="text-sm text-muted-foreground">#006e39</p>
              <code className="text-xs text-brand-green-dark">
                bg-brand-green-dark / text-brand-green-dark
              </code>
            </div>

            {/* Green Light */}
            <div className="rounded-lg border p-4">
              <div className="mb-3 h-20 rounded-md bg-brand-green-light"></div>
              <p className="font-medium">Brand Green Light</p>
              <p className="text-sm text-muted-foreground">#cce8da</p>
              <code className="text-xs text-brand-green">
                bg-brand-green-light
              </code>
            </div>

            {/* Green Highlight */}
            <div className="rounded-lg border p-4">
              <div className="mb-3 h-20 rounded-md bg-brand-green-highlight"></div>
              <p className="font-medium">Brand Green Highlight</p>
              <p className="text-sm text-muted-foreground">#EDFFE1</p>
              <code className="text-xs text-brand-green">
                bg-brand-green-highlight
              </code>
            </div>

            {/* Yellow */}
            <div className="rounded-lg border p-4">
              <div className="mb-3 h-20 rounded-md bg-brand-yellow"></div>
              <p className="font-medium">Brand Yellow (Secondary)</p>
              <p className="text-sm text-muted-foreground">#ffc900</p>
              <code className="text-xs text-brand-yellow">
                bg-brand-yellow / text-brand-yellow
              </code>
            </div>

            {/* Yellow Light */}
            <div className="rounded-lg border p-4">
              <div className="mb-3 h-20 rounded-md bg-brand-yellow-light"></div>
              <p className="font-medium">Brand Yellow Light</p>
              <p className="text-sm text-muted-foreground">#fff4cc</p>
              <code className="text-xs text-brand-yellow">
                bg-brand-yellow-light
              </code>
            </div>

            {/* Brand Black */}
            <div className="rounded-lg border p-4">
              <div className="mb-3 h-20 rounded-md bg-brand-black"></div>
              <p className="font-medium">Brand Black</p>
              <p className="text-sm text-muted-foreground">#131d0e</p>
              <code className="text-xs text-brand-black">
                bg-brand-black / text-brand-black
              </code>
            </div>

            {/* Brand White */}
            <div className="rounded-lg border p-4">
              <div className="mb-3 h-20 rounded-md border bg-brand-white"></div>
              <p className="font-medium">Brand White</p>
              <p className="text-sm text-muted-foreground">#fcfcfc</p>
              <code className="text-xs">bg-brand-white / text-brand-white</code>
            </div>

            {/* Blue */}
            <div className="rounded-lg border p-4">
              <div className="mb-3 h-20 rounded-md bg-brand-blue"></div>
              <p className="font-medium">Brand Blue</p>
              <p className="text-sm text-muted-foreground">#0052c4</p>
              <code className="text-xs text-brand-blue">
                bg-brand-blue / text-brand-blue
              </code>
            </div>

            {/* Blue Light */}
            <div className="rounded-lg border p-4">
              <div className="mb-3 h-20 rounded-md bg-brand-blue-light"></div>
              <p className="font-medium">Brand Blue Light</p>
              <p className="text-sm text-muted-foreground">#cce1fd</p>
              <code className="text-xs text-brand-blue">
                bg-brand-blue-light
              </code>
            </div>
          </div>
        </section>

        {/* Semantic Colors */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-brand-black">
            Semantic Colors (shadcn)
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-primary p-4 text-primary-foreground">
              <p className="font-medium">Primary</p>
              <code className="text-xs opacity-80">bg-primary</code>
            </div>
            <div className="rounded-lg bg-secondary p-4 text-secondary-foreground">
              <p className="font-medium">Secondary</p>
              <code className="text-xs opacity-80">bg-secondary</code>
            </div>
            <div className="rounded-lg bg-accent p-4 text-accent-foreground">
              <p className="font-medium">Accent</p>
              <code className="text-xs opacity-80">bg-accent</code>
            </div>
            <div className="rounded-lg bg-muted p-4 text-muted-foreground">
              <p className="font-medium">Muted</p>
              <code className="text-xs">bg-muted</code>
            </div>
            <div className="rounded-lg bg-destructive p-4 text-white">
              <p className="font-medium">Destructive</p>
              <code className="text-xs opacity-80">bg-destructive</code>
            </div>
            <div className="rounded-lg border bg-card p-4 text-card-foreground">
              <p className="font-medium">Card</p>
              <code className="text-xs opacity-80">bg-card</code>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
