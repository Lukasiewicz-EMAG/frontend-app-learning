import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import classNames from 'classnames';
import { getConfig } from '@edx/frontend-platform';

import messages from './messages';
import Tabs from '../generic/tabs/Tabs';
import { CoursewareSearch, CoursewareSearchToggle } from '../course-home/courseware-search';
import { useCoursewareSearchState } from '../course-home/courseware-search/hooks';

const CourseTabsNavigation = ({
  activeTabSlug, className, tabs, intl,
}) => {
  const intl = useIntl();
  const { show } = useCoursewareSearchState();

  let newTabs = [...tabs];
  if (tabs.length >= 1) { 
    const translatedTitle = intl.formatMessage(messages.myCourses)
    console.log('translatedTitle', translatedTitle)
    const myCoursesTab = {
      title: 'Moje kursy',
      slug: 'static_tab_my_courses',
      url: getConfig().LEARNER_DASHBOARD_URL,
    }
    newTabs.splice(1, 0, myCoursesTab);

  }
  console.log('newTabs', newTabs)

  return (
    <div id="courseTabsNavigation" className={classNames('course-tabs-navigation', className)}>
      <div className="container-xl">
        <Tabs
          className="nav-underline-tabs"
          aria-label={intl.formatMessage(messages.courseMaterial)}
        >
          {newTabs.map(({ url, title, slug }) => (
            <a
              key={slug}
              className={classNames('nav-item flex-shrink-0 nav-link', { active: slug === activeTabSlug })}
              href={url}
            >
              {title}
            </a>
          ))}
        </Tabs>
      </div>
      <div className="course-tabs-navigation__search-toggle">
        <CoursewareSearchToggle />
      </div>
      {show && <CoursewareSearch />}
    </div>
  );
};

CourseTabsNavigation.propTypes = {
  activeTabSlug: PropTypes.string,
  className: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  intl: intlShape.isRequired,
};

CourseTabsNavigation.defaultProps = {
  activeTabSlug: undefined,
  className: null,
};

export default injectIntl(CourseTabsNavigation);
