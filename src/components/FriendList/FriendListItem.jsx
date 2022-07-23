// import css from 'components/FriendList/FriendList.module.css';
import {P, Span, Li, Img} from "components/FriendList/FriendList.styled"

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <Li>
            <Span isOnline={isOnline}>{isOnline}</Span>
            <img  src={avatar} alt="User avatar" width="100" />
            <P>{name}</P>
        </Li>
    );
}

