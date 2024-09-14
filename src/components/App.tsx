import { Header } from './Header'
import { Footer } from './Footer'
import { Section } from './Section'
import { Project } from './Project'
import { Waline } from '../widgets/Waline'

import { sectionsInfo } from '../config'

export function App() {
  // 渲染
  return (
    <main>
      <Header />

      <Section {...sectionsInfo[0]}>
        <Project />
      </Section>

      <Section {...sectionsInfo[1]}>
        <div className="w-full h-full relative">
          <div
            className="absolute top-0 -left-4 w-full h-full bg-transparent"
          />
          <iframe 
            src="https://blog.leafyee.xyz/about/#关于小叶子"
            className="w-full h-full"
          />
        </div>
      </Section>

      <Section {...sectionsInfo[2]}>
        <div className="w-full h-full">
          <iframe 
            src="https://blog.leafyee.xyz/masonry/"
            className="w-full h-full"
          />
        </div>
      </Section>

      <Section {...sectionsInfo[3]}>
        <Waline />
      </Section>

      <Footer />
    </main>
  )
}