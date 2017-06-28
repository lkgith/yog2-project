<div class="message-recommend">
    <h2>推荐</h2>
	<ul>
        {% for item in recommend.data %}
        <li>
            <p class="title">{{ item.title }}</p>
        </li>
        {% endfor %}
    </ul>
</div>
{% script %}
    require('./recommend.js')({
    	data: {{ recommend|json|raw }},
    	title: 'test',
    	el: '.message-recommend'
    });
{% endscript %}