import React from 'react'
import PropTypes from 'prop-types'
import '../styles/ErrorBoundary.css'

const ErrorBoundary = ({ error, children }) => {
  if (error) {
    return (
      <div className='error-message'>
        {error.name}: {error.message}
      </div>
    )
  }

  return children
}

ErrorBoundary.propTypes = {
  error: PropTypes.object
}

export default ErrorBoundary
