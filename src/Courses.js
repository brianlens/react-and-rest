import React from 'react';
import jQuery from 'jquery';

class Courses extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        courses: []
      };
     }

componentDidMount() {
  this.setState({
    courses: [{name: 'React', description: 'Learn to type fast with React'},
              {name: 'JavaScript', description: 'Learn the basics'}
              ]
    });
  }

render(){
  let courses = this.state.courses.map(function(course) {
    return <li key={course.id}><h1>{course.name}</h1><p>{course.description}</p></li>;
  });
    return (
      <ul>
        {courses}
      </ul>
    )
 }
}

export default Courses;
