import React from 'react'
import { ITeamMemberInfo } from '../../../types/team-page'
import LoadingHandler from '../../../hoc/loading-handler'
import MemberCard from '../member-card'
import './styles.css'
import { PAGES_NAMES } from '../../../utils/objects'

interface IMemberCardList {
  data: ITeamMemberInfo[]
}

const MemberCardList = ({ data }: IMemberCardList) => {
  return (
    <LoadingHandler currentPage={PAGES_NAMES.TEAM_PAGE}>
      <ul className='MemberCardList'>
        {data.map(member => (
          <MemberCard id={member.id} key={member.id} avatar={member.avatar} email={member.email} firstName={member.first_name} lastName={member.last_name} />
        ))}
      </ul>
    </LoadingHandler>

  )
}

export default MemberCardList