/* eslint-disable react/prop-types */
export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <div>
        <h3>Something Wrong Happened</h3>
        <p>Check our connection</p>
        <p>{error.message}</p>
        <button className="bg-blue-400" onClick={resetErrorBoundary}>
          Try gain
        </button>
      </div>
    </>
  );
}
