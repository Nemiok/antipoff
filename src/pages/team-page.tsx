import React, { useEffect } from 'react'
import HeroTeam from '../components/organisms/hero-team';
import { useAppDispatch, useAppSelector } from '../redux-store/hooks';
import { fetchTeamMembersAction } from '../redux-store/actions/members';
import { getCurrentPage, getPerPage, getTeamMembers, getTotalMembers, getTotalPages } from '../redux-store/reducers/team-page-reducer/selectors';
import MemberCardList from '../components/organisms/member-card-list';
import Pagination from '../components/organisms/pagination';
import { useSearchParams } from 'react-router-dom';

const TeamPage = () => {
  const dispatch = useAppDispatch()
  const members = useAppSelector(getTeamMembers)
  const currentPage = useAppSelector(getCurrentPage)
  const totalMembers = useAppSelector(getTotalMembers)
  const totalPages = useAppSelector(getTotalPages)
  const perPage = useAppSelector(getPerPage)

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchTeamMembersAction(Number(searchParams.get('page'))))
  }, [])

  useEffect(() => {
    setSearchParams({ 'page': `${currentPage}` })
  }, [currentPage])

  const handlePageChande = (page: any) => {
    dispatch(fetchTeamMembersAction(page))
  }

  return (
    <article className='TeamPage__Article'>
      <HeroTeam />
      <section className='TeamPage__MembersSection'>
        <MemberCardList data={members} />
        <Pagination itemsPerPage={perPage} onPageChange={handlePageChande} totalItems={totalMembers} currentPag={currentPage} totalPag={totalPages} />
      </section>
    </article>
  )
}

export default React.memo(TeamPage) 