let context;

export function showHomeView(ctx) {
    context = ctx;
    context.removeAllViewsExcept(context.views.homeView);
    context.authCheck();
}