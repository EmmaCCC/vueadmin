<template>
  <div class="home">
    <div class="container flex-column">
      <div class="header">
        <div class="logo flex center">
          <img src="@/assets/logo.png" alt="" />
          <span>企业ERP管理系统</span>
        </div>
        <div class="profile flex center">
          <el-dropdown>
            <el-badge :value="3" class="item">
              <span class="el-dropdown-link">
                消息
              </span>
            </el-badge>
          </el-dropdown>
          <el-dropdown>
            <span class="el-dropdown-link">
              亲爱的xxx，你好<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>注销登录</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="container">
        <div class="aside">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="main"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  created() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
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
  border-bottom:1px solid #393D49; 
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
</style>
