<template>
  <div class="home">
    <div class="container flex-column">
      <div class="header">
        <div class="logo flex center">
          <img src="@/assets/logo.png" alt />
          <span>企业ERP管理系统</span>
        </div>
        <div class="profile flex center">
          <el-badge :value="3" class="item">
            <span class="el-dropdown-link">消息</span>
          </el-badge>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              亲爱的xxx，你好
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item command="logout" divided>注销登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="container">
        <div class="aside">
          <el-menu
            :default-active="'/dashboard'"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-menu-item index="/dashboard">
              <i class="el-icon-monitor"></i>
              <span slot="title">控制台</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item index="/user">
                <i class="el-icon-user"></i>
                <span slot="title">人员管理</span>
              </el-menu-item>
              <el-menu-item index="/role">
                <i class="el-icon-s-custom"></i>
                <span slot="title">部门管理</span>
              </el-menu-item>
              <el-menu-item index="1-4">
                <i class="el-icon-document-remove"></i>
                <span slot="title">角色管理</span>
              </el-menu-item>
              <el-menu-item index="1-5">
                <i class="el-icon-key"></i>
                <span slot="title">权限管理</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-service"></i>
                <span>运营中心</span>
              </template>
              <el-menu-item index="2-1">
                <i class="el-icon-medal"></i>
                <span slot="title">团队管理</span>
              </el-menu-item>
              <el-menu-item index="2-2">
                <i class="el-icon-data-line"></i>
                <span slot="title">业绩报表</span>
              </el-menu-item>
              <el-menu-item index="2-3">
                <i class="el-icon-phone"></i>
                <span slot="title">客户回访</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
        <div class="main">
          <div class="breadnav">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>系统管理</el-breadcrumb-item>
              <el-breadcrumb-item>人员管理</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <el-divider></el-divider>
          <div class="content">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    handleCommand(command) {
      if (command === "logout") {
        this.$router.push("login");
      }
    }
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.home {
  height: 100%;
}

.container,
.aside,
.main {
  height: 100%;
}

.aside,
.header {
  background-color: rgb(84, 92, 100);
}

.header {
  height: 80px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #393d49;
}

.header .logo {
  width: 260px;
  color: #dfdddd;
  font-size: 22px;
}

.header .logo img {
  width: 50px;
  height: 50px;
}

.header .profile {
  justify-content: flex-start;
}
.header .profile,
.header .profile .el-dropdown {
  font-size: 15px;
  color: #dfdddd;
  margin: 12px;
}

.aside {
  width: 260px;
}
.el-menu {
  border-right: none;
}
.main {
  padding: 20px;
  background-color: #f2f2f2;
  flex: 1;
}
.main .el-breadcrumb {
  font-size: 15px;
}
.main .breadnav {
  padding: 15px;
  background-color: #fff;
}

.main .content {
  background-color: #fff;
  margin-top: 15px;
  padding: 15px;
}
</style>
