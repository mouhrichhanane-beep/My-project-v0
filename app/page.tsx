// 1. الاستيرادات (Imports)
import { Brain, Code, Palette, Sparkles, Zap, Users } from "lucide-react"

// ملاحظة: قمت بتعديل الاستيراد من @/components/ui/card إلى كود بسيط ليعمل معك فوراً بدون أخطاء
// إذا لم تكن قد أنشأت مجلد ui/card بعد، استخدم هذا المكون البسيط:
const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}>
    {children}
  </div>
);

// 2. كود المكون (Features)
export function Features() {
  return (
    <section className="w-full px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-white">
            Architecting the Future of Software
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            We blend cutting-edge technology with innovative design to create digital experiences that drive your business forward
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-6 md:grid-rows-3">
          {/* AI Integration Card */}
          <Card className="group relative overflow-hidden border-gray-800 bg-gray-900/50 p-8 transition-all hover:border-blue-500/50 md:col-span-4 md:row-span-2">
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
                <Brain className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-3xl font-bold tracking-tight text-white">AI Integration</h3>
              <p className="mb-6 max-w-lg text-muted-foreground">
                Harness the power of artificial intelligence to transform your business operations.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-blue-500" />
                  <span>Natural Language Processing</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Web Development Card */}
          <Card className="group relative overflow-hidden border-gray-800 bg-gray-900/50 p-6 md:col-span-2 md:row-span-2">
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">Web Development</h3>
              <p className="text-sm text-muted-foreground">Build robust, scalable web applications.</p>
            </div>
          </Card>
          
          {/* يمكنك إضافة بقية الـ Cards هنا بنفس الطريقة */}
        </div>
      </div>
    </section>
  )
}

// 3. كود الصفحة الرئيسي الذي يجمع كل شيء (Page)
export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <Features />
    </main>
  )
          }
