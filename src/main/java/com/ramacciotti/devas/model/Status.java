package com.ramacciotti.devas.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@With
@AllArgsConstructor
@NoArgsConstructor
@Table(name= "status")
public class Status {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    private boolean logged;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

}
