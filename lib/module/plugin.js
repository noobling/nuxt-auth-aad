export default function(ctx, inject) {
  inject('auth', $auth)
  ctx.$auth = $auth
}
