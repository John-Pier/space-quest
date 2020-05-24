package com.quest.backend.repository;

import com.quest.backend.entity.Tooltip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface TooltipRepository extends JpaRepository<Tooltip, UUID> {
}
