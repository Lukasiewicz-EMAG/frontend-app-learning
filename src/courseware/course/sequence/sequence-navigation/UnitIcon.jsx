import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faEdit, faTasks, faLock } from '@fortawesome/free-solid-svg-icons';


export function BookRegularIcon({
  className,
  ...props
}) {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 19 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0 3.95312C0 1.76992 1.67098 0 3.73214 0H16.625C17.9355 0 19 1.12754 19 2.51562V15.4531C19 16.4549 18.4444 17.3219 17.6429 17.7262V20.8438H17.9821C18.5462 20.8438 19 21.3244 19 21.9219C19 22.5193 18.5462 23 17.9821 23H3.39286C1.5183 23 0 21.3918 0 19.4062C0 19.285 0.00424107 19.1637 0.0169643 19.0469H0V3.95312ZM3.39286 17.9688C2.64219 17.9688 2.03571 18.6111 2.03571 19.4062C2.03571 20.2014 2.64219 20.8438 3.39286 20.8438H15.6071V17.9688H3.39286ZM2.03571 16.1135C2.45134 15.9203 2.90937 15.8125 3.39286 15.8125H16.625C16.8116 15.8125 16.9643 15.6508 16.9643 15.4531V2.51562C16.9643 2.31797 16.8116 2.15625 16.625 2.15625H3.73214C2.79487 2.15625 2.03571 2.96035 2.03571 3.95312V16.1135ZM6.44643 5.03125H13.9107C14.4748 5.03125 14.9286 5.51191 14.9286 6.10938C14.9286 6.70684 14.4748 7.1875 13.9107 7.1875H6.44643C5.88237 7.1875 5.42857 6.70684 5.42857 6.10938C5.42857 5.51191 5.88237 5.03125 6.44643 5.03125ZM6.44643 8.625H13.9107C14.4748 8.625 14.9286 9.10566 14.9286 9.70312C14.9286 10.3006 14.4748 10.7812 13.9107 10.7812H6.44643C5.88237 10.7812 5.42857 10.3006 5.42857 9.70312C5.42857 9.10566 5.88237 8.625 6.44643 8.625Z"
        fill="currentColor"
      />
    </svg>
  )
}

const UnitIcon = ({ type }) => {
  let icon = null;
  switch (type) {
    case 'video':
      icon = <FontAwesomeIcon className="unit-icon" icon={faVideo} />;
      break;
    case 'other':
      icon = <BookRegularIcon />;
      break;
    case 'vertical':
      icon = <FontAwesomeIcon className="unit-icon" icon={faTasks} />;
      break;
    case 'problem':
      icon = <FontAwesomeIcon className="unit-icon" icon={faEdit} />;
      break;
    case 'lock':
      icon = <FontAwesomeIcon className="unit-icon" icon={faLock} />;
      break;
    default:
      icon = <BookRegularIcon />;
  }

  return (
    <>
      {icon}
    </>
  );
};

UnitIcon.propTypes = {
  type: PropTypes.oneOf(['video', 'other', 'vertical', 'problem', 'lock']).isRequired,
};

export default UnitIcon;
