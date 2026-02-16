package com.example.demo;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@Tag(name = "用户管理", description = "处理用户登录、注册及权限校验")
public class UserController {

    @Operation(summary = "获取用户信息", description = "根据 ID 查询用户的详细资料")
    @GetMapping("/{id}")
    public String getUser(@PathVariable String id) {
        return id;
    }
}
