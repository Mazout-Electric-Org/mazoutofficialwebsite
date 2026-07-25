// Shown by the router's Suspense boundary while a lazy-loaded route's chunk
// downloads, so navigation shows a spinner instead of a blank/frozen page.
const PageLoader = () => (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-2 border-white/15 border-t-white/70 animate-spin" />
    </div>
);

export default PageLoader;
