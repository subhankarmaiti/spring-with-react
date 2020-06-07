package com.subhankar.springreact;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello, you hit the server at " + new Date();
    }
}