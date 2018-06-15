<template>
    <div class="container">
        <div class="row">
            <div class="offset-sm-3 col-sm-6">
                <div class="card">
                    <div class="card-header">
                        <h3>Login</h3>
                    </div>

                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <button type="submit" class="btn btn-outline-dark">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: "login",
  date() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>


<style lang="scss" scoped>

.card {
  margin-bottom: 32px;
}

</style>
