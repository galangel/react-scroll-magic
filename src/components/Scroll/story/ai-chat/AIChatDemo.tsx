import React, { useCallback, useEffect } from 'react';
import { Scroll } from '../../index';
import { ChatHeader, ChatInput, EmptyState, ChatStyles } from './components';
import { useAutoScroll, useChatMessages } from './hooks';
import { convertToItems } from './utils';

export const AIChatDemo: React.FC = () => {
  const { messages, isGenerating, generateResponse } = useChatMessages();

  const { scrollContainerRef, shouldAutoScroll, scrollToBottom } = useAutoScroll();

  // Handle generate button click - scroll to bottom
  const handleGenerate = useCallback(() => {
    generateResponse();
    // Scroll to bottom after a small delay to let the message render
    requestAnimationFrame(() => {
      scrollToBottom();
    });
  }, [generateResponse, scrollToBottom]);

  // Auto-scroll when messages change (only if user is near bottom and not actively scrolling)
  useEffect(() => {
    if (shouldAutoScroll() && messages.length > 0) {
      requestAnimationFrame(() => {
        scrollToBottom();
      });
    }
  }, [messages, shouldAutoScroll, scrollToBottom]);

  const items = convertToItems(messages);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '600px',
        width: '100%',
        maxWidth: '600px',
        backgroundColor: '#0f172a',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <ChatHeader isGenerating={isGenerating} />

      <div ref={scrollContainerRef} style={{ flex: 1, overflow: 'hidden' }}>
        {items.length === 0 ? (
          <EmptyState />
        ) : (
          <Scroll items={items} stickTo="all" scrollBehavior="smooth" headerBehavior="push" />
        )}
      </div>

      <ChatInput isGenerating={isGenerating} onGenerate={handleGenerate} />

      <ChatStyles />
    </div>
  );
};
