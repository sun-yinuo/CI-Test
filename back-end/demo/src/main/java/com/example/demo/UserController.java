package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User user = userService.getUserById(id);

        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public void testSonarFail(int x) {
        if (x > 10) {
            System.out.println("Large");
        } else if (x > 10) {
            // ❌ BUG: 这个条件永远进不来，Sonar 极其讨厌这种重复判断 (Rule: S1862)
            // 这会被标记为 "Identical expression"
            System.out.println("Impossible");
        }

        String s = null;
        if (s != null & s.length() > 0) {
            // ❌ BUG: 这里用的是 & 而不是 &&，会导致空指针异常风险 (Rule: S2259)
            System.out.println("Crash");
        }
    }
}