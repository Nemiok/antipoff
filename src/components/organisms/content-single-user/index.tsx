import React from 'react'
import './styles.css'
import { SVG_ICONS } from '../../../assets/images/svg-icons'

interface IContentSingleUserProps {
  email: string
}

const ContentSingleUser = ({ email }: IContentSingleUserProps) => {
  return (
    <section className='ContentSingleUser__Container'>
      <div className='ContentSingleUser__Paragraph'>
        <p>Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.</p>
        <p>В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".</p>
        <p>Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.</p>
      </div>
      <aside className='ContentSingleUser__Contacts'>
        <a href="tel:+79543334455" className='ContentSingleUser__Contact'>
          {SVG_ICONS.PHONE_ICON}
          <div>+7 (954) 333-44-55</div>
        </a>
        <a href={`mailto:${email}`} className='ContentSingleUser__Contact'>
          {SVG_ICONS.MESSAGE_ICON}
          <div>{email}</div>
        </a>
      </aside>
    </section>
  )
}

export default ContentSingleUser