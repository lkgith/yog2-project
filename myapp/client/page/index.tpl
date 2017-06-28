{% extends 'myapp:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "myapp:widget/tab/tab.tpl"%}
        {% widget "myapp:widget/message/message.tpl"%}
        {% widget "myapp:widget/recommend/recommend.tpl"%}
     </div>
{% endblock %}