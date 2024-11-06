/* eslint-disable react/prop-types */
export default function ErrorFallback({ error, resetErrorBoundary }) {
  console.log(error.message);
  return (
    <div>
      <h3 className="items-center justify-center bg-red-400">
        Something Wrong Happened
      </h3>
      <p>Check Your Internet or Reload the page </p>

      <button className="bg-blue-400" onClick={resetErrorBoundary}>
        Try gain
      </button>
    </div>
  );
}
