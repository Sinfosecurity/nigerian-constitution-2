export default function Loading() {
  return (
    <div className="container flex items-center justify-center min-h-[70vh]">
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900"></div>
        <p className="text-green-700">Loading content...</p>
      </div>
    </div>
  );
}
