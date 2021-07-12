import { h } from 'preact';
import { SideBar } from '../../components/SideBar';
import { Container } from '../../components/Container/insex';

export const Store = ({ match }) => (<Container><SideBar match={match} /></Container>);
